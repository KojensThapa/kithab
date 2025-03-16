import Book from "../model/book_model.js"; // Ensure correct path and file extension

export const getBook = async (req, res) => {
    try {
        const books = await Book.find();
        // console.log("Fetched books:", books); // Debugging log
        res.status(200).json(books);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

