import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import './styles/global.css';



export function App() {
  return (
   <main className="w-screen h-screen bg-gray-900 flex items-center justify-center flex-col text-gray-100">
     <div className="max-w-[400px] w-full">
      <header className="flex items-center justify-center flex-col">
          <Logo />
          <Heading size="lg" asChild>
            <h1 className="mt-4 mb-3">Ignite Lab</h1>
          </Heading>
          <Text size="lg" className="text-gray-400 mt-1" >
            Faça login e comece a usar!
          </Text>
        </header>
        <form className="mt-8 flex gap-4 flex-col">
          <label htmlFor="email" className="flex gap-3 flex-col">
            <Text className="font-semibold">
              Endereço de e-mail
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input id="email" placeholder="test@gmail.com"/>
            </TextInput.Root>
          </label>
          <label htmlFor="senha" className="flex gap-3 flex-col ">
            <Text className="font-semibold">
              Sua senha
            </Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input type="password" id="senha" placeholder="*****************"/>
            </TextInput.Root>
          </label>
        </form>
      <label htmlFor="remember" className="flex items-center gap-2 mt-4 mb-8">
          <Checkbox id="remember" />
          <Text className="text-gray-200" size="sm">
            Lembrar de mim por 30 dias
          </Text>
      </label>
      <Button type="submit">
        Entrar na plataforma
      </Button>
      <footer className="flex flex-col items-center gap-4 mt-8 underline">
        <Text className="text-cyan-500" size="sm" >
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text className="text-cyan-500" size="sm" >
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora! </a>
        </Text>
      </footer>
     </div>
   </main>
  )
}

