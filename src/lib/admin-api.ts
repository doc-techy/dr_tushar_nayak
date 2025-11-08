"use client";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://techy.zapto.org:8000";

type RequestOptions = {
  accessToken?: string | null;
  init?: RequestInit;
};

async function request<T>(endpoint: string, { accessToken, init }: RequestOptions = {}): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const mergedHeaders = init?.headers ?? {};
  if (mergedHeaders instanceof Headers) {
    mergedHeaders.forEach((value, key) => {
      headers[key] = value;
    });
  } else if (Array.isArray(mergedHeaders)) {
    mergedHeaders.forEach(([key, value]) => {
      headers[key] = value;
    });
  } else if (mergedHeaders) {
    Object.assign(headers, mergedHeaders);
  }

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...init,
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    const contentType = response.headers.get("content-type");
    const errorBody = contentType?.includes("application/json") ? await response.json() : await response.text();
    throw new Error(
      typeof errorBody === "string"
        ? errorBody || `Request failed with status ${response.status}`
        : errorBody.error ?? `Request failed with status ${response.status}`,
    );
  }

  const text = await response.text();
  if (!text) {
    return {} as T;
  }

  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error("Failed to parse API response.");
  }
}

export type LoginResponse = {
  success: boolean;
  message: string;
  tokens: {
    access: string;
    refresh: string;
  };
  user: {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    is_staff: boolean;
    is_superuser: boolean;
  };
};

export async function login(username: string, password: string) {
  return request<LoginResponse>("/api/auth/login/", {
    init: {
      method: "POST",
      body: JSON.stringify({ username, password }),
    },
  });
}

export type Appointment = {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  created_at: string;
  updated_at: string;
};

export type PaginatedAppointments = {
  appointments: Appointment[];
  pagination: {
    current_page: number;
    total_pages: number;
    total_count: number;
    has_next: boolean;
    has_previous: boolean;
  };
};

export function fetchAppointments(accessToken: string, page = 1, perPage = 10) {
  return request<PaginatedAppointments>(`/api/appointments/?page=${page}&per_page=${perPage}`, {
    accessToken,
  });
}

export type CreateAppointmentPayload = {
  name: string;
  email?: string;
  phone: string;
  date: string;
  time: string;
  message?: string;
};

export function createAppointment(payload: CreateAppointmentPayload) {
  return request<{ appointment: Appointment; success?: boolean }>("/api/appointments/", {
    init: {
      method: "POST",
      body: JSON.stringify(payload),
    },
  });
}

export type AppointmentUpdatePayload = Partial<
  Pick<Appointment, "name" | "email" | "phone" | "date" | "time" | "message" | "status">
>;

export type AppointmentUpdateResponse = {
  appointment: Appointment;
  email_sent?: boolean;
};

export function updateAppointment(accessToken: string, appointmentId: number, payload: AppointmentUpdatePayload) {
  return request<AppointmentUpdateResponse>(`/api/appointments/${appointmentId}/`, {
    accessToken,
    init: {
      method: "PUT",
      body: JSON.stringify(payload),
    },
  });
}

export function deleteAppointment(accessToken: string, appointmentId: number) {
  return request<{ success?: boolean }>(`/api/appointments/${appointmentId}/`, {
    accessToken,
    init: {
      method: "DELETE",
    },
  });
}


export type AppointmentStatsResponse = {
  success: boolean;
  stats: {
    total: number;
    pending: number;
    confirmed: number;
    completed: number;
    cancelled: number;
  };
};

export function fetchAppointmentStats(accessToken: string) {
  return request<AppointmentStatsResponse>("/api/appointments/stats/", {
    accessToken,
  });
}

export type AvailabilityEntry = {
  id: number;
  date: string | null;
  day?: number | null;
  start_time: string;
  end_time: string;
  slot_duration: number;
  is_recurring: boolean;
  days?: number[];
};

export function fetchAvailability(accessToken: string, params?: { recurring?: boolean; date?: string }) {
  const searchParams = new URLSearchParams();
  if (params?.recurring) searchParams.set("recurring", "true");
  if (params?.date) searchParams.set("date", params.date);
  const queryString = searchParams.toString();
  return request<{ availability: AvailabilityEntry[] }>(
    `/api/availability/${queryString ? `?${queryString}` : ""}`,
    { accessToken },
  );
}

export type BlockedSlot = {
  id: number;
  date: string | null;
  start_time: string;
  end_time: string;
  reason?: string;
  is_recurring: boolean;
  days?: number[];
};

export function fetchBlockedSlots(accessToken: string) {
  return request<{ blocked_slots: BlockedSlot[] }>("/api/blocked-slots/", { accessToken });
}

export type DetailedSlot = {
  start_time: string;
  end_time: string;
  slot_time: string;
  is_available: boolean;
  blocked_reason?: string;
  appointment_id?: number;
};

export function fetchDetailedSlots(accessToken: string, date: string) {
  return request<{ success: boolean; date: string; slots: DetailedSlot[] }>(
    `/api/slots/detailed/?date=${date}`,
    { accessToken },
  );
}

