export const getSmapleUsers = () => {
    const users = [];
    const user = {
        id: 1,
        status: 1,
        phone: '+9****aly1',
        email: 'hassan@turnlunchon.com',
        is_mobile_active: 1,
        active_menu_type: 1,
        is_breakfast_mobile_active: 1,
        send_marketing_sms: 1,
        is_email_active: 1,
        is_breakfast_email_active: 1,
        send_weekly_emails: 1,
        send_marketing_emails: 1,
        daily_menu_token: '92yKjs5b4b',
        deactivated_till: '2019-12-12',
        deactivated_emails_till: '2019-12-12',
        created_at: '2016-05-01 11:10:00',
        updated_at: '2016-05-01 11:10:00',
    };

    for (let counter = 1; counter < 4; counter++) {
        users.push(user);
    }

    return users;
};
