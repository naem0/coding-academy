"use client"
import React, { useState } from 'react';
import Modal from '@/components/Modal';
import Image from 'next/image';
import bkash from '@/public/qr.webp'
import Form from './Form';

const ModalBtn = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className={`${className} px-8 py-4 font-bold rounded-2xl hover:opacity-50`} onClick={openModal}>Enroll Now</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Form></Form>
      </Modal>
    </div>
  );
};

export default ModalBtn;
