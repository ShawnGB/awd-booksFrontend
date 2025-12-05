import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { booksService } from "../api/services/books.service";
import { useAuth } from "../contexts/AuthContext";

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    booksService.getAll().then((data) => setBooks(data));
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="books-page">
      <div className="books-header">
        <div>
          <h1>Books</h1>
          <p className="user-info">Welcome, {user?.username}!</p>
        </div>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book: Book, index: number) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
