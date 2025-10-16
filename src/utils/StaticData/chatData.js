export const randomNames = [
  "Aarav",
  "Isha",
  "Kabir",
  "Riya",
  "Arjun",
  "Meera",
  "Rohan",
  "Siya",
  "Aditya",
  "Tara",
  "Vihaan",
  "Anaya",
  "Krishna",
  "Dev",
  "Neha",
  "Raj",
  "Sneha",
  "Karan",
  "Pooja",
  "Sahil"
];

export const randomMessages = [
  "Hey everyone! 👋",
  "Wow, this is awesome!",
  "Learning React is fun 😍",
  "Can someone explain useEffect?",
  "I just finished this module 💪",
  "Namaste React FTW 🚀",
  "Who's watching this right now?",
  "This concept finally makes sense!",
  "That example was so clear 🙌",
  "Loving the energy here!",
  "React hooks are mind-blowing 🤯",
  "Can we go over props again?",
  "Haha, that was funny 😂",
  "Great explanation!",
  "I'm following along!",
  "Anyone else from India 🇮🇳?",
  "This chat is so active!",
  "Keep up the good work!",
  "useState makes life easier 😎",
  "Let's build something cool together!"
];
export const getRandomChat = () => {
  const name = randomNames[Math.floor(Math.random() * randomNames.length)];
  const message = randomMessages[Math.floor(Math.random() * randomMessages.length)];
  return { name, message };
};