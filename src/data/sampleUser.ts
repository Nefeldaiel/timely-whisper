import { User } from '@/types/user';

export const sampleUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  avatarSeed: 'Felix',
  letters: [
    { id: 1, title: "Weekly Newsletter", date: "2024-03-20", type: 'unread' },
    { id: 2, title: "Meeting Invitation", date: "2024-03-19", type: 'read' },
    { id: 3, title: "Project Update", date: "2024-03-18", type: 'sent' },
    { id: 4, title: "Important Announcement Draft", date: "2024-03-17", type: 'draft' },
    { id: 5, title: "Important Announcement", date: "2024-03-17", type: 'unread' },
    { id: 6, title: "Team Building Event", date: "2024-03-16", type: 'read' },
  ],
  contacts: [
    { id: 1, name: "Emma Thompson", email: "emma.t@example.com", avatarSeed: "emma", isFavorite: true },
    { id: 2, name: "James Wilson", email: "james.w@example.com", avatarSeed: "james", isFavorite: false },
    { id: 3, name: "Sophia Chen", email: "sophia.c@example.com", avatarSeed: "sophia", isFavorite: true },
    { id: 4, name: "Lucas Rodriguez", email: "lucas.r@example.com", avatarSeed: "lucas", isFavorite: false },
    { id: 5, name: "Olivia Kim", email: "olivia.k@example.com", avatarSeed: "olivia", isFavorite: false },
  ],
}; 