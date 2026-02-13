import { useEffect, useState } from "react"; import { motion } from "framer-motion"; import confetti from "canvas-confetti";

export default function ValentineProposal() { const [yes, setYes] = useState(false);

useEffect(() => { if (yes) { const interval = setInterval(() => { confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } }); }, 1200); return () => clearInterval(interval); } }, [yes]);

return ( <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-400 to-red-500 flex items-center justify-center text-white overflow-hidden"> <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 max-w-lg text-center shadow-2xl" > {!yes ? ( <> <motion.h1 animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-4xl font-bold mb-4" > Hey… I have something important 💌 </motion.h1>

<p className="text-lg mb-6">
          From the moment I met you, my world started making more sense. 
          The way you exist in my life feels like a favourite song on repeat.
          I don’t want a future that doesn’t have you in it.
        </p>

        <motion.img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          alt="love"
          className="rounded-xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        <h2 className="text-2xl font-semibold mb-4">Will you be my Valentine? ❤️</h2>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setYes(true)}
            className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-full text-lg shadow-lg"
          >
            Yes 💖
          </button>

          <motion.button
            whileHover={{ x: Math.random() * 100 - 50 }}
            className="bg-gray-500 px-6 py-2 rounded-full text-lg"
          >
            No 🙃
          </motion.button>
        </div>
      </>
    ) : (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">You just made me the happiest person alive 🥹</h1>
        <p className="text-lg mb-6">
          This is officially our love timeline. Screenshot this. Bookmark this.
          This is the start of something beautiful.
        </p>

        <motion.img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          alt="couple"
          className="rounded-xl mx-auto mb-6"
        />

        <p className="text-xl">Happy Valentine’s Day, my favourite human 💘</p>
      </motion.div>
    )}
  </motion.div>

  <motion.div
    className="absolute"
    animate={{ y: [0, -800] }}
    transition={{ repeat: Infinity, duration: 10 }}
  >
    ❤️
  </motion.div>
</div>

); }
