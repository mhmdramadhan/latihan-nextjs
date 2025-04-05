import fs from "fs";
import path from "path";
import dummyMeetups from "./dummyMeetups.json";

export function getDummyMeetups() {
    return dummyMeetups;
}

/**
 * Fungsi untuk menambahkan data meetup baru ke daftar dummy meetups.
 * @param {Object} newMeetup - Data meetup baru yang akan ditambahkan.
 * @param {string} newMeetup.title - Judul meetup.
 * @param {string} newMeetup.image - URL gambar meetup.
 * @param {string} newMeetup.address - Alamat meetup.
 * @param {string} newMeetup.description - Deskripsi meetup.
 */
export function addDummyMeetup(newMeetup) {
    if (!newMeetup.title || !newMeetup.image || !newMeetup.address || !newMeetup.description) {
        throw new Error("All fields are required");
    }

    const newMeetupWithId = {
        ...newMeetup,
        id: `m${dummyMeetups.length + 1}`, // Generate ID baru
    };

    // Tambahkan data baru ke array
    dummyMeetups.push(newMeetupWithId);

    // Path ke file JSON
    const filePath = path.join(process.cwd(), "utils", "dummyMeetups.json");

    // Tulis data baru ke file JSON
    fs.writeFileSync(filePath, JSON.stringify(dummyMeetups, null, 2), "utf-8");

    return newMeetupWithId;
}
