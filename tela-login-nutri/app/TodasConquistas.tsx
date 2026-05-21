import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { getEvolucoes, getEvolucoesByUsuario } from '../src/services/evolucaoService_1';

// Cores usadas nos cards de conquista
const CORES = ['#2E7D32', '#1565C0', '#E65100', '#6D28D9', '#065F46', '#B71C1C'];

type Evolucao = {
    idEvolucao: number;
    dataRegistro: string;
    pesoRegistrado: number;
    metaProgresso: number;
    totalCaloriasConsumidas: number;
    refeicoesConcluidasI: number;
    usuario: { nomeCompleto: string };
};

// Gera o título da conquista com base nos dados de evolução
function gerarConquista(ev: Evolucao): { titulo: string; descricao: string } {
    if (ev.refeicoesConcluidasI >= 3) {
        return {
            titulo: 'Refeições em Dia 🍽️',
            descricao: `${ev.refeicoesConcluidasI} refeições concluídas no dia ${ev.dataRegistro}.`,
        };
    }
    if (ev.pesoRegistrado && ev.metaProgresso && ev.pesoRegistrado <= ev.metaProgresso) {
        return {
            titulo: 'Meta Atingida! 🎯',
            descricao: `Peso registrado (${ev.pesoRegistrado} kg) atingiu a meta de ${ev.metaProgresso} kg.`,
        };
    }
    if (ev.totalCaloriasConsumidas > 0) {
        return {
            titulo: 'Calorias Registradas 🔥',
            descricao: `${ev.totalCaloriasConsumidas} kcal consumidas em ${ev.dataRegistro}.`,
        };
    }
    return {
        titulo: 'Evolução Registrada ⭐',
        descricao: `Registro feito em ${ev.dataRegistro}.`,
    };
}

export default function TodasConquistas() {
    const [evolucoes, setEvolucoes] = useState<Evolucao[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function buscar() {
            try {
                const usuarioId = await AsyncStorage.getItem('usuarioId');
                const evolucoes = usuarioId
                    ? await getEvolucoesByUsuario(usuarioId)
                    : await getEvolucoes();
                // Filtra apenas as evoluções do usuário logado
                setEvolucoes(evolucoes);
            } catch {
                // Se falhar, exibe lista vazia
            } finally {
                setLoading(false);
            }
        }
        buscar();
    }, []);

    if (loading) {
        return (
            <View style={s.centralizador}>
                <ActivityIndicator size="large" color="#2E7D32" />
            </View>
        );
    }

    return (
        <View style={s.root}>
            <StatusBar barStyle="dark-content" backgroundColor="#F5F7F5" />

            <View style={s.header}>
                <TouchableOpacity onPress={() => router.back()} style={s.btnVoltar}>
                    <Ionicons name="chevron-back" size={22} color="#1a1a1a" />
                </TouchableOpacity>
                <Text style={s.headerTitulo}>Todas as Conquistas</Text>
                <View style={{ width: 38 }} />
            </View>

            <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
                {evolucoes.length === 0 ? (
                    <View style={s.centralizador}>
                        <Ionicons name="trophy-outline" size={48} color="#ccc" />
                        <Text style={s.semDados}>Nenhuma conquista registrada ainda.</Text>
                    </View>
                ) : (
                    evolucoes.map((ev, i) => {
                        const { titulo, descricao } = gerarConquista(ev);
                        const cor = CORES[i % CORES.length];
                        return (
                            <View key={ev.idEvolucao} style={[s.card, { backgroundColor: cor }]}>
                                <View style={s.cardTopo}>
                                    <View style={s.avatarPlaceholder}>
                                        <Ionicons name="person" size={20} color="rgba(255,255,255,0.6)" />
                                    </View>
                                    <View>
                                        <Text style={s.pacienteNome}>
                                            {ev.usuario?.nomeCompleto ?? 'Usuário'}
                                        </Text>
                                        <Text style={s.data}>{ev.dataRegistro}</Text>
                                    </View>
                                </View>
                                <Text style={s.titulo}>{titulo}</Text>
                                <Text style={s.descricao}>{descricao}</Text>
                            </View>
                        );
                    })
                )}
                <View style={{ height: 40 }} />
            </ScrollView>
        </View>
    );
}

const s = StyleSheet.create({
    root:               { flex: 1, backgroundColor: '#F5F7F5' },
    centralizador:      { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12, paddingTop: 60 },
    semDados:           { fontSize: 14, color: '#aaa', marginTop: 8 },
    header:             { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 18, paddingTop: 54, paddingBottom: 16 },
    btnVoltar:          { width: 38, height: 38, justifyContent: 'center', alignItems: 'center' },
    headerTitulo:       { fontSize: 18, fontWeight: '800', color: '#1a1a1a' },
    scroll:             { paddingHorizontal: 18, paddingTop: 8 },
    card:               { borderRadius: 22, padding: 20, marginBottom: 14 },
    cardTopo:           { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 14 },
    avatarPlaceholder:  { width: 48, height: 48, borderRadius: 24, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
    pacienteNome:       { fontSize: 15, fontWeight: '700', color: '#fff', marginBottom: 2 },
    data:               { fontSize: 12, color: 'rgba(255,255,255,0.8)' },
    titulo:             { fontSize: 22, fontWeight: '800', color: '#fff', marginBottom: 8 },
    descricao:          { fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 20 },
});
