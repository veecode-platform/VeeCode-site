import React, { useState } from "react";

interface DemoFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  teamSize: string;
  interests: string[];
}

const DemoRequestForm: React.FC = () => {
  const [formData, setFormData] = useState<DemoFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    teamSize: "",
    interests: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<DemoFormData>>({});

  const teamSizeOptions = [
    "1-10 pessoas",
    "11-50 pessoas",
    "51-200 pessoas",
    "201-500 pessoas",
    "501+ pessoas",
  ];

  const interestOptions = [
    "API Catalog",
    "Kong Service Manager",
    "VeeCode RBAC",
    "Software Templates",
    "VeeCode Docs",
  ];

  const validate = (): boolean => {
    const newErrors: Partial<DemoFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Empresa é obrigatória";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.teamSize) {
      newErrors.teamSize = "Tamanho da equipe é obrigatório";
    }

    if (formData.interests.length === 0) {
      newErrors.interests = ["Selecione pelo menos um interesse"];
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          interests: [...prev.interests, value],
        };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter((interest) => interest !== value),
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // Here you would typically send the form data to your backend
      console.log("Demo request submitted:", formData);
      setSubmitted(true);

      // Reset form after submission
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        teamSize: "",
        interests: [],
      });

      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Solicite uma Demo</h2>

      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded text-center">
          <p className="font-bold mb-2">Solicitação enviada com sucesso!</p>
          <p>
            Nossa equipe entrará em contato em breve para agendar sua
            demonstração.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Empresa *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.company ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email corporativo *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="teamSize"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tamanho da equipe de desenvolvimento *
            </label>
            <select
              id="teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.teamSize ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Selecione uma opção</option>
              {teamSizeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.teamSize && (
              <p className="text-red-500 text-xs mt-1">{errors.teamSize}</p>
            )}
          </div>

          <div>
            <p className="block text-sm font-medium text-gray-700 mb-2">
              Quais recursos você tem interesse? *
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {interestOptions.map((option) => (
                <div key={option} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`interest-${option}`}
                    name="interests"
                    value={option}
                    checked={formData.interests.includes(option)}
                    onChange={handleInterestChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`interest-${option}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
            {errors.interests && (
              <p className="text-red-500 text-xs mt-1">{errors.interests}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[rgba(51,255,205,1)] text-black font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Solicitar Demo
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            Ao enviar este formulário, você concorda com nossa Política de
            Privacidade e Termos de Serviço.
          </p>
        </form>
      )}
    </div>
  );
};

export default DemoRequestForm;
