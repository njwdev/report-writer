const data = (question, answer, icon) => ({ question, answer, icon });
const aboutFAQsAdmin = [
  data(
    'How do I add a comment?',
    "Go to the ADMIN section. Click on the COMMENTS button. Click on the ADD COMMENT button. Write your comment in the text box, following the guide for names and pronouns. Select the type of comment. If your comment only applies to one term (e.g 'Have a nice summer'), check the term specific switch and choose the appropriate term. When your comment is ready, click on SUBMIT.",
    'verified_user',
  ),
  data(
    'How do I delete a comment?',
    'Go to the ADMIN section. Click on the COMMENTS button. Click on the comment type to open the list of comments. Choose the comment you want to delete, click on the + sign and then click DELETE.',
    'verified_user',
  ),
  data(
    'How do I edit a comment',
    'Edit comment is not currently available. Planned for future versions.',
    'verified_user',
  ),
  data(
    'How do I make someone admin?',
    'Go to the ADMIN section. Click the USERS button. Click on the + sign next to the user you want to make admin. Hit the make admin switch.',
    'verified_user',
  ),
  data(
    'How do I delete a user?',
    'Delete user is not currently available to Admins. If you believe a user should be deleted, please send an email to nwjwdev@gmail.com',
    'verified_user',
  ),
];

export default aboutFAQsAdmin;
