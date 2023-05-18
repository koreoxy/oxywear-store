import { useState } from 'react';
import Input from '../components/Input';
import Layout from '../components/Layout';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Layout title="Contact Us">
      <div className="text-center ">
        <div className="font-bold p-5 text-[21px]">
          <h1>Contact Us</h1>
          <h1>
            <span className="text-green-500 ">OxyWear</span> Store
          </h1>
        </div>
        <p className="text-gray-500">
          Jika anda mempunyai pertanyaan seputar berbelanja atau yang terkait
          dengan OxyWear Store anda bisa mengisi form di bawah ini.
        </p>
      </div>

      <div className="flex justify-center gap-4 p-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row">
            <span className="px-1">
              <Input
                label="Your Name"
                onChange={(event) => setName(event.target.value)}
                id="name"
                type="text"
                value={name}
              />
            </span>
            <span className="px-1">
              <Input
                label="Email Address"
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                type="email"
                value={email}
              />
            </span>
          </div>
          <div>
            <Input
              label="Subject"
              onChange={(event) => setSubject(event.target.value)}
              id="subject"
              type="text"
              value={subject}
            />
          </div>
          <div className="">
            <Input
              label="Leave a Message"
              onChange={(event) => setMessage(event.target.value)}
              id="message"
              type="text"
              value={message}
            />
          </div>

          <button className="btn-square bg-green-500 text-white w-auto rounded-md shadow-md  hover:bg-green-700 font-bold">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </Layout>
  );
}
