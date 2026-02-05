import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Trash2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// Initialisez EmailJS (remplacez par votre PUBLIC_KEY)
emailjs.init("3vxe8-AQM8EA1jsdy");

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  // Charger les messages au démarrage
  useEffect(() => {
    const savedMessages = localStorage.getItem("contactMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send("service_zgxvnv6", "template_to4dwsd", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      // Ajouter le message à la liste
      const newMessage = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        date: new Date().toLocaleDateString("fr-FR"),
      };

      const updatedMessages = [newMessage, ...messages];
      setMessages(updatedMessages);
      localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Erreur lors de l'envoi. Vérifiez votre configuration EmailJS.");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter((msg) => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem("contactMessages", JSON.stringify(updatedMessages));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Parlons de votre projet
          </span>
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Vous avez une idée ou un projet en tête ? Contactez-moi et discutons
          de la façon dont je peux vous aider à le concrétiser.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a
                  href="mailto:francis@example.com"
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  f6randrianarivony@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
                <a
                  href="tel:+261345595327"
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  +261 34 55 953 27
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Localisation</h3>
                <p className="text-slate-300">Antananarivo, Madagascar</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-cyan-500 focus:outline-none text-white placeholder-slate-400 transition-colors"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-cyan-500 focus:outline-none text-white placeholder-slate-400 transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-cyan-500 focus:outline-none text-white placeholder-slate-400 transition-colors resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50"
            >
              <Send size={20} />
              {loading ? "Envoi..." : "Envoyer"}
            </button>

            {submitted && (
              <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg text-center">
                ✓ Message envoyé avec succès !
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Section Messages Reçus */}
      {messages.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-700 mt-12">
          <h3 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Messages Reçus ({messages.length})
            </span>
          </h3>

          <div className="grid gap-6">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-400">
                      {msg.name}
                    </h4>
                    <p className="text-slate-400 text-sm">{msg.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400 text-xs">{msg.date}</span>
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="text-slate-400 hover:text-red-400 transition-colors p-2"
                      title="Supprimer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
                <p className="text-slate-300 whitespace-pre-wrap">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
