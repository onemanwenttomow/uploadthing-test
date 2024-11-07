import { generateUploadButton } from "@uploadthing/react";

export const UploadButton = generateUploadButton();

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
