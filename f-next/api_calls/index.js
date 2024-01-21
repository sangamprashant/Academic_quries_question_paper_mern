async function fetchProjectsLanguages() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/project/languages`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching project language:", error);
    return [];
  }
}

async function fetchRecentProjects() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/get/recent/projects`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data.map((project) => ({
      ...project,
      createdAt: new Date(project.createdAt).toLocaleDateString(), // Format the date
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function fetchProjectByLanguage(language) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/get/project/by/type/${language}`,
      {
        cache: "no-store",
      }
    );
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function fetchProjectById(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/get/project/by/id/${id}`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function fetchReviews() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/public/review`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function fetchReviewsStars() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/public/review/average`, {
      cache: "no-store",
    });
    const data =await res.json()
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {};
  }
}

const fetchCourse = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/get/course`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const fetchUserCount = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/count/visitors`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const fetchPaperCount = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/count/valid-question-papers`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const fetchOpenPaper = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/get/paper/${id}`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const fetchCourseOpen = async (path) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/course/${path}`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const fetchSubjectNames = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/subjects`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const fetchNotesBySubject = async (path) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/subject-notes/${path}`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const fetchOpenNotes = async (id) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/subject-notes/id/${id}`, {
      cache: "no-store",
    });
    const responseBody = await res.text();
    const data = JSON.parse(responseBody);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export {
  fetchProjectsLanguages,
  fetchRecentProjects,
  fetchProjectByLanguage,
  fetchProjectById,
  fetchReviews,
  fetchReviewsStars,
  fetchCourse,
  fetchUserCount,
  fetchPaperCount,
  fetchOpenPaper,
  fetchCourseOpen,
  fetchSubjectNames,
  fetchNotesBySubject,
  fetchOpenNotes,
};
