import React, { useState, useEffect } from "react";

const FilePreviewer = ({ file }) => {
    const [filePreview, setFilePreview] = useState(null);

    useEffect(() => {
        if (file) {
            if (file.type === "image") {
                setFilePreview(file.path);
            } else if (file.type === "pdf") {
                if (file instanceof Blob) {
                    const previewUrl = URL.createObjectURL(file);
                    setFilePreview(previewUrl);
                    return () => URL.revokeObjectURL(previewUrl);
                } else if (typeof file.path === "string") {
                    setFilePreview(file.path);
                } else if (typeof file.base64 === "string") {
                    setFilePreview(
                        `data:application/pdf;base64,${file.base64}`
                    );
                } else {
                    console.error("Unsupported PDF format", file);
                    setFilePreview(null);
                }
            } else {
                console.warn("Unsupported file type:", file.type);
                setFilePreview(null);
            }
        } else {
            setFilePreview(null);
        }
        console.log("File:", file);
        console.log("File Preview:", filePreview);
    }, [file]);

    const renderPreview = () => {
        if (!file || !filePreview) {
            return <p>No file selected or unsupported type.</p>;
        }

        switch (file.type) {
            case "image":
                return (
                    <img
                        src={filePreview}
                        alt='Image Preview'
                        style={{
                            maxWidth: "200px",
                            height: "150px",
                            objectFit: "fill",
                            border: "5px solid #555",
                            alignContent: "flex-start",
                        }}
                    />
                );
            // case "pdf":
            //     return (
            //         <iframe
            //             src={filePreview}
            //             title='PDF Preview'
            //             width='100%'
            //             height='600px'
            //             style={{ border: "none" }}
            //         />
            //     );
            default:
                return <p>Unsupported file type: {file.type}</p>;
        }
    };

    return (
        <div className='file-previewer'>
            <div className='preview-container' style={{ marginTop: "20px" }}>
                {renderPreview()}
            </div>
        </div>
    );
};

export default FilePreviewer;
