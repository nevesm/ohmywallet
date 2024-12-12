import Fingerprint from "./components/fingerprint";

export default function Home() {
  return (
      <div className="bg-primary w-full h-screen">
        <div className="rounded-full h-[400px] w-[400px] w-[100%] bg-secondary opacity-5 fixed -top-20 -right-36 overflow-hidden"></div>
        <div className="flex flex-col items-center align-middle">
          <a className="flex text-2xl mt-[250px]">Entre na sua conta</a>
          <form>
            <input type="email" placeholder="email" className="flex border-1 rounded-lg w-[316px] h-[63px] border-grey my-6 px-2 text-black" />
            <input type="password" placeholder="senha" className="flex border-1 rounded-lg w-[316px] h-[63px] border-grey my-6 px-2 text-black" />
            <button className="bg-button rounded-lg text-white w-[316px] h-[63px]">Entrar</button>
          </form>
          <a className="text-center text-neutral-500 my-6 hover:text-neutral-200" href="/esqueciasenha">Esqueceu sua senha?</a>
          <Fingerprint />
          <div className="flex flex-row gap-12 mt-6">
            <a className="text-center text-neutral-500">Não tem uma conta?</a>
            <a className="text-center text-white hover:text-blue-500" href="/cadastro">Cadastre-se</a>
          </div>
        </div>
        <div className="rounded-full h-[1000px] w-[1000px] w-[100%] bg-secondary opacity-5 fixed -bottom-[600px] -left-[500px] overflow-hidden"></div>
      </div>  
  );
}
