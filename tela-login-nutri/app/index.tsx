import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    Image,
    ImageBackground,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { getNutricionistas } from '../src/services/nutricionistaService_1';
import { getUsuarios } from '../src/services/usuarioService_1';
import { authStyles as style } from '../props/authStyles';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    async function entrar() {
        if (!email || !senha) {
            Alert.alert('Atenção', 'Preencha todos os campos!');
            return;
        }

        setLoading(true);

        try {
            // 1. Tenta login como NUTRICIONISTA
            const nutricionistas = await getNutricionistas();
            const nutricionista = nutricionistas.find(
                (n: any) =>
                    n.emailProfissional?.toLowerCase() === email.trim().toLowerCase() &&
                    n.senhaHash === senha
            );

            if (nutricionista) {
                await AsyncStorage.setItem('nutricionistaId', nutricionista.idNutri.toString());
                await AsyncStorage.setItem('nutricionistaNome', nutricionista.nomeCompleto);
                await AsyncStorage.setItem('nutricionistaEmail', nutricionista.emailProfissional);
                await AsyncStorage.setItem('nutricionistaPerfil', JSON.stringify(nutricionista));
                await AsyncStorage.removeItem('usuarioId');

                Alert.alert('Bem-vinda!', `Olá, ${nutricionista.nomeCompleto}!`);
                router.replace('./Dashboardnutricionista');
                return;
            }

            // 2. Tenta login como USUÁRIO/PACIENTE
            const usuarios = await getUsuarios();
            const usuario = usuarios.find(
                (u: any) =>
                    u.email?.toLowerCase() === email.trim().toLowerCase() &&
                    u.senhaHash === senha
            );

            if (!usuario) {
                Alert.alert('Erro', 'Usuário não encontrado ou senha incorreta!');
                return;
            }

            await AsyncStorage.setItem('usuarioId', usuario.idUser.toString());
            await AsyncStorage.setItem('usuarioNome', usuario.nomeCompleto);
            await AsyncStorage.setItem('usuarioEmail', usuario.email);
            await AsyncStorage.removeItem('nutricionistaId');

            // 3. Verifica se o perfil do usuário está completo
            const perfilCompleto =
                usuario.objetivoSaude &&
                usuario.tipoDieta &&
                usuario.pesoAtual &&
                usuario.altura;

            if (!perfilCompleto) {
                router.replace('./Preferenciasdieta');
                return;
            }

            Alert.alert('Bem-vindo!', `Olá, ${usuario.nomeCompleto}!`);
            router.replace(`./Receitas?nome=${usuario.nomeCompleto}`);

        } catch (error) {
            console.log('Erro login:', error);
            Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <ImageBackground
            style={style.bg}
            source={require('../src/assets/images/bg-vegetables.jpg')}
        >
            <View style={style.logoContainer}>
                <Image
                    source={require('../src/assets/images/icon.png')}
                    style={style.logo}
                />
                <Text style={style.appNome}>Nutri+</Text>
            </View>

            <View style={style.card}>
                <Text style={style.title}>Entrar</Text>
                <Text style={style.subtitle}>Acesse com seu e-mail e senha</Text>

                <View style={style.form}>
                    <TextInput
                        style={style.input}
                        placeholder="E-mail"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={style.input}
                        placeholder="Senha"
                        placeholderTextColor="#999"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={[style.botao, loading && style.botaoDesabilitado]}
                        onPress={entrar}
                        disabled={loading}
                    >
                        <Text style={style.botaoTexto}>
                            {loading ? 'Carregando...' : 'Entrar'}
                        </Text>
                    </TouchableOpacity>

                    <Text
                        style={style.linkTexto}
                        onPress={() => router.push('./cadastro')}
                    >
                        Não tem conta?{' '}
                        <Text style={style.linkDestaque}>Cadastre-se</Text>
                    </Text>
                </View>
            </View>
        </ImageBackground>
    );
}
