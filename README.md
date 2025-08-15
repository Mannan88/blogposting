# BlogPost - Simple Blogging Platform

A lightweight blogging platform built with Node.js, Express, and EJS that allows users to create, publish, and manage blog posts and drafts.

## Features

* 📝 Create and publish blog posts
* ✏️ Save posts as drafts
* 🗑️ Delete posts/drafts
* ✨ Simple, clean interface
* 🚫 No database required (in-memory storage)

## Technologies Used

* **Backend:** Node.js, Express
* **Frontend:** EJS templates, vanilla CSS
* **Deployment:** Render (or other PaaS)

## Project Structure

```
blogpost/
├── public/
│   ├── styles/        # CSS stylesheets
│   ├── linkedin.png   # Social media icons
│   ├── social.png
│   └── write.png
├── views/
│   ├── partials/      # Reusable components
│   │   ├── blogs.ejs
│   │   ├── drafts.ejs
│   │   ├── header.ejs
│   │   └── index.ejs
│   └── index.ejs      # Main view
├── index.js           # Server application
├── package.json
└── package-lock.json
```

## Getting Started

### Prerequisites

* Node.js (v14 or higher)
* npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Mannan88/blogposting.git
cd blogposting
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
node index.js
```

4. Open your browser and visit:

```
http://localhost:3000
```

## Usage

* **Homepage:** Create new posts or save as drafts
* **Blogs:** View all published posts
* **Drafts:** View and manage unpublished drafts

## API Endpoints

| Method | Endpoint       | Description                   |
| ------ | -------------- | ----------------------------- |
| GET    | `/`            | Homepage with creation form   |
| GET    | `/blogs`       | View all published blogs      |
| GET    | `/drafts`      | View all draft posts          |
| POST   | `/blogs`       | Publish a new blog            |
| POST   | `/drafts`      | Save a new draft              |
| DELETE | `/remove-blog` | Delete a blog/draft           |
| PUT    | `/edit-blog`   | Update an existing blog/draft |

## Deployment

To deploy to Render:

1. Create a new Web Service
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `node index.js`
5. Deploy!

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch:

```bash
git checkout -b feature/AmazingFeature
```

3. Commit your changes:

```bash
git commit -m "Add some amazing feature"
```

4. Push to the branch:

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

* **Your Name** - [@Mannan88](https://github.com/Mannan88) - kocharmanan88@gmail.com](mailto:kocharmanan88@gmail.com)
* **Project Link:** [https://github.com/Mannan88/blogposting](https://github.com/Mannan88/blogposting)


