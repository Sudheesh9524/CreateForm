import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateForm from "./Form/createForm";
import ViewForm from "./Form/viewForm";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
		<BrowserRouter>
			<Routes>
      <Route path="/" element={<CreateForm />} />
      <Route path="/view" element={<ViewForm />} />
			</Routes>
		</BrowserRouter>
);

