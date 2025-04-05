"use client";

import { useRef } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    async function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        try {
            const response = await fetch("/api/meetups", {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                const data = await response.json();
                console.log(data);
                throw new Error(data.message || "Something went wrong!");
            }

            const data = await response.json();
            console.log(data);

            // Tampilkan SweetAlert untuk pesan sukses
            Swal.fire({
                title: "Success!",
                text: "Meetup has been added successfully.",
                icon: "success",
                confirmButtonText: "OK",
            });

            // Reset form setelah sukses
            titleInputRef.current.value = "";
            imageInputRef.current.value = "";
            addressInputRef.current.value = "";
            descriptionInputRef.current.value = "";

        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Error!",
                text: error.message || "Failed to add meetup.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" required id="title" ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" required id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        required
                        rows="5"
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;