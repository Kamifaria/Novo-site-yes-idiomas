export default function FormLead() {
  return (
    <form className="max-w-md mx-auto mt-6 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Quero ser aluno YES!</h2>
      <input type="text" placeholder="Nome" className="border p-2 w-full mb-2" />
      <input type="email" placeholder="E-mail" className="border p-2 w-full mb-2" />
      <input type="tel" placeholder="Telefone" className="border p-2 w-full mb-2" />
      <select className="border p-2 w-full mb-2">
        <option>Selecione o estado</option>
        <option>RJ</option>
        <option>SP</option>
        {/* outros estados */}
      </select>
      <div className="mb-2">
        <input type="checkbox" id="consent" />
        <label htmlFor="consent" className="ml-2 text-sm">
          Aceito contato por e-mail, WhatsApp ou telefone.
        </label>
      </div>
      <button type="submit" className="bg-red-600 text-white p-2 w-full">
        QUERO ME MATRICULAR
      </button>
    </form>
  );
}
