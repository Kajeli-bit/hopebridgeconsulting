import { Suspense } from "react";
import SetPasswordForm from "./SetPasswordForm";

export default function SetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-zinc-100">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#4a9e6e] border-t-transparent" />
        </div>
      }
    >
      <SetPasswordForm />
    </Suspense>
  );
}
