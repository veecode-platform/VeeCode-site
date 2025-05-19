"use client";

import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Subscribing email:", email);
      setSubmitted(true);
      setEmail("");

      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-sidebar-accent p-6 rounded-lg shadow-md max-w-md mx-auto my-10">
      <h3 className="text-2xl font-bold mb-4 text-white">
        Fique por dentro das novidades
      </h3>
      <p className="text-white mb-4">
        Assine nossa newsletter para receber atualizações sobre novos recursos e
        lançamentos.
      </p>

      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Obrigado por se inscrever!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
            required
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
          >
            Inscrever
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;
