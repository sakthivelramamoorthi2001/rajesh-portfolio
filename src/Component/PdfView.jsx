import { Document } from "react-pdf";
import ExamplePDF from "../../public/resume.pdf";

function App() {
  return (
    <div>
      <Document file={ExamplePDF} >
      </Document>
    </div>
  );
}

export default App;
