"use client";

import { useEffect, useRef } from "react";
import { useActionState } from "react";
import toast from "react-hot-toast";

import { sendEmail } from "@/app/actions/sendEmail";

const initialState = {
  success: false,
  message: "",
  timestamp: 0,
};

export function useContactForm(onSuccess: () => void) {
  const [state, formAction] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state?.timestamp) return;

    if (state.success) {
      // JIKA BERHASIL: Tampilkan pesan sukses dan hapus isi form
      toast.success(state.message || "Message sent!");
      formRef.current?.reset(); // <--- Form teks biasa terhapus
      onSuccess(); // <--- AsyncSelect terhapus (lewat state di page.tsx)
    } else {
      // JIKA GAGAL: Hanya tampilkan pesan error
      // Tanpa formRef.current?.reset(), inputan user akan tetap ada di kotak input
      toast.error(state.message || "Failed to send message");
    }
  }, [state.timestamp, state.success, state.message, onSuccess]); // Tambahkan dependency yang diperlukan

  return {
    state,
    formAction,
    formRef,
  };
}
