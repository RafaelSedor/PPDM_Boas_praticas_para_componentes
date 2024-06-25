# MyProject

Este projeto é um exemplo de aplicação móvel criada com Expo e TypeScript. O projeto demonstra o uso de componentes reutilizáveis, parametrização de componentes, uso de mocks para popular interfaces e criação de componentes compostos seguindo o padrão de composição.

## Instruções para inicializar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/RafaelSedor/PPDM_Boas_praticas_para_componentes.git

cd MyProject
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o projeto:**

```bash
npm start
```

Isso abrirá a interface do Expo DevTools no seu navegador. Você pode usar um emulador ou escanear o QR code com seu dispositivo móvel para visualizar o aplicativo.

## Estrutura do Projeto

- `src/components`: Contém componentes reutilizáveis como `CustomComponent` e `Card`.
- `src/mocks`: Contém arquivos de mock usados para popular a interface durante o desenvolvimento.
- `src/App.tsx`: Ponto de entrada da aplicação onde os componentes são combinados para criar a interface principal.

## Componentes Principais

### CustomComponent

Um componente simples que recebe argumentos via interface e dispara um evento de callback.

```tsx
interface CustomComponentProps {
  title: string;
  onButtonClick: () => void;
}
```

### Card

Um componente composto que segue o padrão de composição, contendo `Card.Header`, `Card.Body` e `Card.Footer`.

```tsx
<Card>
  <Card.Header>Header Content</Card.Header>
  <Card.Body>Body Content</Card.Body>
  <Card.Footer>Footer Content</Card.Footer>
</Card>
```

## Uso de Mocks

Os dados de mock são definidos em `src/mocks/data.ts` e usados para popular uma `FlatList` na aplicação.

```ts
export const mockData = Array.from({ length: 100 }, (_, index) => ({
  id: index.toString(),
  name: `Item ${index + 1}`,
}));
```

## Vídeo Aula

Para mais detalhes sobre o desenvolvimento de componentes reutilizáveis e a aplicação dos padrões mencionados, assista à videoaula no link abaixo:

[Videoaula](https://youtu.be/OtdMPckhiqs)

## Referências Úteis

- [Repositório do vídeo](https://github.com/university-lessons/dpdm-components-advanced)
- [Atomic Design (conceito)](https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c)
- [Atomic Design (aula prática da RocketSeat)](https://youtu.be/su_xOZMiPKo)
- [Pattern de Composição (re-export de componentes)](https://youtu.be/oPOKpSFqy-I)
