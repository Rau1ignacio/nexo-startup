export function createHttpClient({ baseURL }) {
  async function request(path, options = {}) {
    const response = await fetch(`${baseURL}${path}`, {
      headers: { "Content-Type": "application/json", ...(options.headers ?? {}) },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message ?? "Request failed");
    }

    return response.json().catch(() => ({}));
  }

  return { request };
}
