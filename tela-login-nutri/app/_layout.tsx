import { Stack } from 'expo-router';

export default function LoginScreen() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="cadastro" options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="Preferenciasdieta" options={{ headerShown: false }} />
      <Stack.Screen name="ObjetivosSaude" options={{ headerShown: false }} />
      <Stack.Screen name="Receitas" options={{ headerShown: false }} />
      <Stack.Screen name="MaisDetalhes" options={{ headerShown: false }} />
      <Stack.Screen name="Nutricionistaupsell" options={{ headerShown: false }} />
      <Stack.Screen name="Perfil" options={{ headerShown: false }} />
      <Stack.Screen name="Restricoesadicionais" options={{ headerShown: false }} />
      <Stack.Screen name="TipoDeConta" options={{ headerShown: false }} />
      <Stack.Screen name="Cadastronutricionista" options={{ headerShown: false }} />
    </Stack>
  );
}
