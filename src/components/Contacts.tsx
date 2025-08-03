import React, { useState } from 'react';
import '../styles/Contacts.scss';
import { FaEnvelope, FaTelegramPlane, FaGithub } from 'react-icons/fa';

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Сообщение отправлено!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contacts">
      <h1 className="contacts-title">Связаться со мной</h1>
      
      <div className="contacts-content">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="name">Ваше имя</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="email">Ваш email</label>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="subject">Тема</label>
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Сообщение</label>
          </div>

          <button type="submit">Отправить</button>
        </form>

        <div className="contact-methods">
          <h2>Другие способы связи</h2>
          <ul>
            <li>
              <FaEnvelope /> <a href="mailto:you@example.com">you@example.com</a>
            </li>
            <li>
              <FaTelegramPlane /> <a href="https://t.me/yourusername" target="_blank" rel="noreferrer">Telegram</a>
            </li>
            <li>
              <FaGithub /> <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
