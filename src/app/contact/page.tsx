"use client";

import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(100);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (submitStatus === "success") {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(progressInterval);
            return 0;
          }
          return prev - 2;
        });
      }, 100);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [submitStatus]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setProgress(100);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/gpalmenara@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            _captcha: "false",
            _template: "table",
            _autoresponse: "Obrigado pelo seu contato! Responderei em breve.",
            _honey: "",
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setSubmitStatus("success");
        reset();
        toast.success("Mensagem enviada com sucesso!");
      } else {
        throw new Error(result.message || "Falha ao enviar mensagem");
      }
    } catch (error) {
      console.error("Erro:", error);
      setSubmitStatus("error");
      toast.error(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro. Tente novamente mais tarde."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col items-center px-6 py-16 md:py-24 max-w-6xl mx-auto">
      <section className="w-full text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          Vamos <span className="text-primary">Conversar</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estou disponível para oportunidades, projetos ou simplesmente para
          trocar ideias sobre tecnologia.
        </p>
      </section>

      <div className="w-full grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Informações de Contato</h2>
            <p className="text-muted-foreground">
              Preencha o formulário ou utilize um dos meios abaixo:
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <a
                  href="mailto:gpalmenara@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  gpalmenara@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Telefone</h3>
                <a
                  href="tel:+5533998631093"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (33) 99863-1093
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">Localização</h3>
                <p className="text-muted-foreground">Minas Gerais, Brasil</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="font-medium mb-3">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/gabrielporto05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/gabrielporto05"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent text-primary hover:bg-primary/10 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Envie uma Mensagem</h2>

          {submitStatus === "success" && (
            <div className="relative p-4 mb-6 bg-green-900/50 border border-green-400 text-green-300 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-900/30">
                <div
                  className="h-full bg-green-400 transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 mb-6 bg-red-900/50 border border-red-400 text-red-300 rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente
              ou me contate diretamente por email.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nome
              </label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                {...register("name", {
                  required: "Nome é obrigatório",
                  minLength: {
                    value: 3,
                    message: "Nome deve ter pelo menos 3 caracteres",
                  },
                })}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                {...register("email", {
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1"
              >
                Assunto
              </label>
              <Input
                id="subject"
                placeholder="Qual o assunto?"
                {...register("subject", {
                  required: "Assunto é obrigatório",
                  minLength: {
                    value: 5,
                    message: "Assunto deve ter pelo menos 5 caracteres",
                  },
                })}
              />
              {errors.subject && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Mensagem
              </label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Sua mensagem aqui..."
                {...register("message", {
                  required: "Mensagem é obrigatória",
                  minLength: {
                    value: 10,
                    message: "Mensagem deve ter pelo menos 10 caracteres",
                  },
                })}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="" />

            <Button
              type="submit"
              className="w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
