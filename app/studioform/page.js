// app/studioform/page.js
import { Suspense } from "react";
import Studioform from "../../components/StudioForm"; // your existing client component

export default function Page() {
  return (
    <Suspense fallback={<p className="text-center mt-20">Loading Studio Form...</p>}>
      <Studioform />
    </Suspense>
  );
}
