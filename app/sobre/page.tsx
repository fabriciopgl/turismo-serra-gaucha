import { FaGit, FaGitAlt, FaGithub } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Sobre o Aplicativo</h1>
      <p className="text-lg text-gray-700 mb-4">
        Nosso aplicativo promove o turismo sustentável na Serra Gaúcha,
        conectando visitantes a experiências autênticas e empreendimentos
        locais.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        Este aplicativo foi desenvolvido como parte da Atividade Extensionista
        IV da Uninter, por Fabrício Pagliarini sob o RU 4110920.
      </p>

      <div className="border-t border-gray-200 pt-6 mt-6">
        <div className="flex items-center space-x-2">
          <FaGithub className="text-2xl text-gray-800" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Contribua para o Projeto
          </h2>
        </div>

        <p className="text-lg text-gray-700 mb-2 mt-4">
          O código-fonte do projeto está disponível no GitHub. Sinta-se à
          vontade para explorar o mesmo!
        </p>

        <a
          href="https://github.com/fabriciopgl/turismo-serra-gaucha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-blue-600 hover:underline"
        >
          Acesse o repositório no GitHub
        </a>
      </div>
    </div>
  );
}
