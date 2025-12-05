import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import "@styles/Contacts.scss";
import {
  FaTelegramPlane,
  FaLinkedin,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const CONTACT_INFO = {
  telegram: "https://t.me/likohv",
  linkedin: "https://linkedin.com/in/yourprofile",
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<FormStatus>("idle");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string): string | undefined => {
    if (!value.trim()) {
      return t("requiredField");
    }

    if (name === "email" && !validateEmail(value)) {
      return t("invalidEmail");
    }

    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (touched.has(name)) {
      const error = validateField(name, value);
      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched(new Set(touched).add(name));

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const sendToTelegram = async (data: FormData): Promise<void> => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;

    const text = `📬 Новое сообщение с сайта!\n\n👤 Имя: ${data.name}\n📧 Email: ${data.email}\n📝 Тема: ${data.subject}\n\n💬 Сообщение:\n${data.message}`;

    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
        }),
      }
    );
  };

  const sendToEmailJS = async (data: FormData): Promise<void> => {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      throw new Error("EmailJS not configured");
    }

    const now = new Date();
    const timestamp = now.toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        time: timestamp,
      },
      EMAILJS_PUBLIC_KEY
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched(new Set(Object.keys(formData)));

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      await Promise.all([sendToEmailJS(formData), sendToTelegram(formData)]);

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      setTouched(new Set());

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <FaTelegramPlane />,
      label: t("telegramLabel"),
      url: CONTACT_INFO.telegram,
      color: "#0088cc",
    },
    {
      icon: <FaLinkedin />,
      label: t("linkedinLabel"),
      url: CONTACT_INFO.linkedin,
      color: "#0077b5",
    },
  ];

  return (
    <div className="contacts">
      <div className="contacts-header">
        <h1 className="contacts-title">{t("contactTitle")}</h1>
        <p className="contacts-subtitle">{t("contactSubtitle")}</p>
      </div>

      <div className="contacts-content">
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div
              className={`form-group ${
                errors.name && touched.has("name") ? "has-error" : ""
              } ${formData.name ? "has-value" : ""}`}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === "loading"}
                autoComplete="name"
              />
              <label htmlFor="name">{t("nameLabel")}</label>
              {errors.name && touched.has("name") && (
                <span className="error-message">
                  <FaExclamationCircle /> {errors.name}
                </span>
              )}
            </div>

            <div
              className={`form-group ${
                errors.email && touched.has("email") ? "has-error" : ""
              } ${formData.email ? "has-value" : ""}`}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === "loading"}
                autoComplete="email"
              />
              <label htmlFor="email">{t("emailLabel")}</label>
              {errors.email && touched.has("email") && (
                <span className="error-message">
                  <FaExclamationCircle /> {errors.email}
                </span>
              )}
            </div>

            <div
              className={`form-group ${
                errors.subject && touched.has("subject") ? "has-error" : ""
              } ${formData.subject ? "has-value" : ""}`}
            >
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === "loading"}
                autoComplete="off"
              />
              <label htmlFor="subject">{t("subjectLabel")}</label>
              {errors.subject && touched.has("subject") && (
                <span className="error-message">
                  <FaExclamationCircle /> {errors.subject}
                </span>
              )}
            </div>

            <div
              className={`form-group ${
                errors.message && touched.has("message") ? "has-error" : ""
              } ${formData.message ? "has-value" : ""}`}
            >
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={status === "loading"}
              />
              <label htmlFor="message">{t("messageLabel")}</label>
              {errors.message && touched.has("message") && (
                <span className="error-message">
                  <FaExclamationCircle /> {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={`submit-button ${status}`}
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" && (
                <>
                  <span className="spinner"></span>
                  {t("sending")}
                </>
              )}
              {status === "success" && (
                <>
                  <FaCheckCircle />
                  {t("messageSent")}
                </>
              )}
              {(status === "idle" || status === "error") && (
                <>
                  <FaPaperPlane />
                  {t("sendButton")}
                </>
              )}
            </button>

            {status === "error" && (
              <div className="status-message error">
                <FaExclamationCircle />
                {t("messageError")}
              </div>
            )}
          </form>
        </div>

        <div className="contact-methods">
          <h2>{t("otherContactMethods")}</h2>
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.url}
                target="_blank"
                rel="noopener noreferrer"
                className="method-card"
                style={
                  { "--accent-color": method.color } as React.CSSProperties
                }
              >
                <div className="method-icon">{method.icon}</div>
                <span className="method-label">{method.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
