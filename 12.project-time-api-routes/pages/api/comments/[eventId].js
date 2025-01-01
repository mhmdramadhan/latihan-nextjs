import { getAllEvents } from '../../../helpers/api-util';

export default async function handler(req, res) {
  // cara rama untuk handle POST request di Next.js
  // if (req.method === 'POST') {
  //   const { eventId } = req.query;
  //   const { email, name, text } = req.body;

  //   if (
  //     !email ||
  //     !email.includes('@') ||
  //     !name ||
  //     name.trim() === '' ||
  //     !text ||
  //     text.trim() === ''
  //   ) {
  //     res.status(422).json({ message: 'Invalid input' });
  //     return;
  //   }

  //   const newComment = {
  //     id: new Date().toISOString(),
  //     email,
  //     name,
  //     text,
  //   };

  //   const data = await getAllEvents();

  //   const selectedEvent = data.find((event) => event.id === eventId);

  //   if (!selectedEvent) {
  //     res.status(404).json({ message: 'Event not found' });
  //     return;
  //   }

  //   const comments = selectedEvent.comments || [];
  //   comments.push(newComment);

  //   const updatedData = [...data];
  //   const eventIndex = updatedData.findIndex((event) => event.id === eventId);
  //   updatedData[eventIndex] = {
  //     ...updatedData[eventIndex],
  //     comments,
  //   };

  //   // store comments in a database or in a file
  //   await fetch(
  //     'https://nextjs-course-28911-default-rtdb.firebaseio.com/events.json',
  //     {
  //       method: 'PUT',
  //       body: JSON.stringify(updatedData),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   );

  //   res.status(201).json({ message: 'Added comment', comment: newComment });
  // }

  // cara pemebelajaran
  const { eventId } = req.query;

  if (req.method === 'POST') {
    // add server-side validation
    const { email, name, text } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);
    res.status(201).json({ message: 'Added comment', comment: newComment });
  }

  if (req.method === 'GET') {
    const dummyList = [
      { id: 'c1', name: 'Max', text: 'A first comment!' },
      {
        id: 'c2',
        name: 'Manuel',
        text: 'A second comment!',
      },
    ];

    res.status(200).json({ comments: dummyList });
  }
}
