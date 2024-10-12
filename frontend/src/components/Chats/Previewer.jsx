import React, { useState, useEffect } from "react";

const FilePreviewer = ({ file }) => {
    const [filePreview, setFilePreview] = useState(null);

    useEffect(() => {
        if (file && file.path) {
            if (file.type === "image") {
                setFilePreview(file.path); // Directly use the file path for preview
            } else {
                alert("Unsupported file type");
                setFilePreview(null); // Clear preview if unsupported
            }
        } else {
            setFilePreview(null); // Clear preview if no file or invalid file
        }
    }, [file]);

    const renderPreview = () => {
        if (file.type === "image") {
            // Render image preview
            return <img src={filePreview} alt="Image Preview" style={{ maxWidth: "200px", height: "200px" }} />;
        } else if (file.type === "pdf") {
            // Render PDF preview in an iframe
            return <iframe src={filePreview} title="PDF Preview" width="100%" height="600px" />;
        }
        return <p>No file selected or unsupported type.</p>;
    };

    return (
        <div className="file-previewer">
            <div className="preview-container" style={{ marginTop: "20px" }}>
                {filePreview ? renderPreview() : <p>Error in preview</p>}
            </div>
        </div>
    );
};

export default FilePreviewer;
