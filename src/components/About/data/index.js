const data = (question, answer, icon) => ({ question, answer, icon });
export const aboutFAQsUser = [
  data(
    'What is Report Writer?',
    'Report writer is a tool designed to help teachers write English Language reports more quickly and efficiently.'
  ),
  data(
    'Who is Report Writer for?',
    'Report writer has been designed for English Language (ESL/EFL) teachers.'
  ),
  data(
    'How do I use Report Writer?',
    "Go to the HOME Page. Add your student's name, the pronoun you wish to use, and the term you are writing the report for. Click on the sections to view relevant comments. Build your report by clicking on the comments. When your report is complete, hit the copy button. "
  ),
  data(
    'I messed up my comment, what should I do?',
    'If you have messed up your comment, just hit the refresh icon underneath the comment box to start again'
  ),
  data(
    'I forgot my password. What should I do?',
    'If you have forgotten your password, go to the login page. Click the FORGOTTEN YOUR PASSWORD link. Enter your email address, and you will be sent instructions to reset your password.'
  ),
  data(
    'How can I change my password?',
    'If you want to change your password, go to the ACCOUNT section, click on the CHANGE PASSWORD link. Write and confirm your new password.'
  ),
  data(
    'Why are there only two pronouns?',
    "At the moment, Report Writer only uses two pronouns due to the technical challenge of conjugating all of the verbs for 'they' & 'you'. This is something we are hoping to add in future versions."
  ),
  data(
    'How can I add new comments?',
    'At the moment, in order to add new comments you must be an Admin. But remember - you can still edit the comments in the text box.'
  ),
  data(
    'How do I become an admin?',
    'If you want to become an admin, please send an email to nwjwdev@gmail.com'
  ),
  data(
    'I found a problem, what should I do?',
    'If you find a problem, please send an email to nwjwdev@gmail.com '
  )
];

export const aboutFAQsAdmin = [
  data(
    'How do I add a comment?',
    "Go to the ADMIN section. Click on the COMMENTS button. Click on the ADD COMMENT button. Write your comment in the text box, following the guide for names and pronouns. Select the type of comment. If your comment only applies to one term (e.g 'Have a nice summer'), check the term specific switch and choose the appropriate term. When your comment is ready, click on SUBMIT.",
    'verified_user'
  ),
  data(
    'How do I delete a comment?',
    'Go to the ADMIN section. Click on the COMMENTS button. Click on the comment type to open the list of comments. Choose the comment you want to delete, click on the + sign and then click DELETE.',
    'verified_user'
  ),
  data(
    'How do I edit a comment',
    'Edit comment is not currently available. Planned for future versions.',
    'verified_user'
  ),
  data(
    'How do I make someone admin?',
    'Go to the ADMIN section. Click the USERS button. Click on the + sign next to the user you want to make admin. Hit the make admin switch.',
    'verified_user'
  ),
  data(
    'How do I delete a user?',
    'Delete user is not currently available to Admins. If you believe a user should be deleted, please send an email to nwjwdev@gmail.com',
    'verified_user'
  )
];
