import React, {useState} from "react";
import {
	TextField,
	IconButton,
	Typography,
	Paper,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import chatbotImage from "../assets/chatbot.jpg";

const Chatbot = () => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	const handleSend = () => {
		if (message.trim()) {
			setMessages([...messages, {text: message, sender: "user"}]);
			setTimeout(() => {
				setMessages((prevMessages) => [
					...prevMessages,
					{
						text: "Bot says Heloooooo",
						sender: "bot",
					},
				]);
			}, 1000);
			setMessage("");
		}
	};

	return (
		<div className="fixed bottom-7 right-4 z-50 w-80">
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="chatbot-content"
					id="chatbot-header"
					className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-4 rounded-t-lg">
					<Typography className="text-white font-bold text-lg flex items-center">
						<ChatIcon className="mr-2" /> Customer Support
					</Typography>
				</AccordionSummary>
				<AccordionDetails className="p-0">
					<Paper className="w-full max-w-md p-0 rounded-lg overflow-hidden">
						<div className="h-80 overflow-y-auto p-4 bg-gray-50 border-t border-gray-300 break-words">
							{messages.map((msg, index) => (
								<div
									key={index}
									className={`flex items-start ${
										msg.sender === "user" ? "justify-end" : "justify-start"
									} mb-3`}>
									{msg.sender === "bot" && (
										<div className="mr-2">
											<img
												src={chatbotImage}
												alt="Bot"
												className="min-w-5 min-h-5 w-5 h-5 rounded-full"
											/>
										</div>
									)}
									<Typography
										className={`max-w-xs px-3 py-1 rounded-xl break-words overflow-hidden ${
											msg.sender === "user"
												? "bg-[rgb(37,99,235)] text-white"
												: "bg-gray-100 text-gray-800"
										}`}>
										{msg.text}
									</Typography>
								</div>
							))}
						</div>

						<div className="flex items-center p-2 border-t border-gray-300">
							<TextField
								fullWidth
								variant="outlined"
								placeholder="Type your message..."
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								onKeyPress={(e) => e.key === "Enter" && handleSend()}
								className="mr-2"
							/>
							<IconButton color="primary" onClick={handleSend}>
								<SendIcon />
							</IconButton>
						</div>
					</Paper>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default Chatbot;
