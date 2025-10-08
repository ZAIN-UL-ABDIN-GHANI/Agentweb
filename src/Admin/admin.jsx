// src/admin/Admin.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAgents } from "./context/adminContext";

export default function AdminAgents() {
  const { agents, addAgent, deleteAgent } = useAgents();

  const [newAgent, setNewAgent] = useState({
    tag: "",
    title: "",
    image: "",
    description: "",
    bullets: ["", "", "", ""],
  });

  const [preview, setPreview] = useState(null);

  // Limit each bullet to 12 words
  const handleBulletChange = (index, value) => {
    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount <= 12) {
      const updatedBullets = [...newAgent.bullets];
      updatedBullets[index] = value;
      setNewAgent({ ...newAgent, bullets: updatedBullets });
    }
  };

  //  Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setNewAgent({ ...newAgent, image: reader.result }); // store base64
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  //  Add agent to context
  const handleAddAgent = () => {
    if (!newAgent.title || !newAgent.tag) return;
    const cleanBullets = newAgent.bullets.filter((b) => b.trim() !== "");
    addAgent({ ...newAgent, bullets: cleanBullets });
    setNewAgent({
      tag: "",
      title: "",
      image: "",
      description: "",
      bullets: ["", "", "", ""],
    });
    setPreview(null);
  };

  return (
    <div className="min-h-screen px-[4%] mt-[14%] md:mt-[8%] text-white bg-gradient-to-b from-black via-[#1a1406] to-black py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-pur">
        Admin Control Panel
      </h2>

      {/* Add New Agent Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto bg-black/60 backdrop-blur-md border border-pur p-6 rounded-xl shadow-lg"
      >
        <h3 className="text-lg font-semibold mb-4 text-pur">
          Add New AI Agent
        </h3>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Tag (e.g., HR)"
            value={newAgent.tag}
            onChange={(e) => setNewAgent({ ...newAgent, tag: e.target.value })}
            className="w-full p-2 rounded bg-black/40 border border-gray-600"
          />

          <input
            type="text"
            placeholder="Title (e.g., AI Agent for HR)"
            value={newAgent.title}
            onChange={(e) => setNewAgent({ ...newAgent, title: e.target.value })}
            className="w-full p-2 rounded bg-black/40 border border-gray-600"
          />

          <textarea
            placeholder="Description"
            value={newAgent.description}
            onChange={(e) =>
              setNewAgent({ ...newAgent, description: e.target.value })
            }
            className="w-full p-2 rounded bg-black/40 border border-gray-600"
          />

          {/*  Image Upload */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Upload Image (Preview below)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 rounded bg-black/40 border border-gray-600 text-sm"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-32 object-cover rounded mt-2 border border-gray-700"
              />
            )}
          </div>

          {/*  Bullet Inputs */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-300">
              Add up to 4 bullet points (max 12 words each)
            </h4>
            {newAgent.bullets.map((b, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Bullet ${i + 1}`}
                value={b}
                onChange={(e) => handleBulletChange(i, e.target.value)}
                className="w-full p-2 rounded bg-black/40 border border-gray-600 text-sm"
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddAgent}
            className="bg-pur text-black w-full font-semibold py-2 rounded-lg mt-2"
          >
            Add Agent
          </motion.button>
        </div>
      </motion.div>

      {/*  Agent List */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((a) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/60 border border-gray-700 p-4 rounded-xl shadow-lg"
          >
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-28 object-cover rounded mb-3"
            />
            <h3 className="text-lg font-bold">{a.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{a.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-300">
              {a.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => deleteAgent(a.id)}
              className="mt-3 bg-red-600 text-white px-4 py-1 rounded"
            >
              Delete
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
