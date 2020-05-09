import React from 'react';
import styled from 'styled-components';
import { useLanguage } from 'hooks/useLanguage';
import { ENG, RU, UA } from 'constants/language';
import { DefaultPage } from 'components/DefaultPage';
import Image from 'assets/images/applicants.jpg';
import { Text } from 'styled/Text';

export const MASTERS_HEADER = {
    [UA]: 'Магістратура',
    [RU]: 'Магистратура',
    [ENG]: 'Мagistracy',
};

const MASTERS_SPECIALITY_HEADER = {
    [UA]: 'Підготовка магістрів за спеціальністю «Комп’ютерні науки»',
    [RU]: '«Компьютерные науки»',
    [ENG]: 'Master’s Degree in“Computer Science”',
};

const MASTERS_SPECIALITY_SUBHEADER = {
    [UA]: 'Управління проектами у сфері інформаційних технологій',
    [RU]: 'Управление проектами в области информационных технологий',
    [ENG]: 'Project Management in Information Technology',
};

const MASTERS_SPECIALITY_DESCRIPTION = {
    [UA]: 'Програма призначена для тих, хто хоче освоїти технології створення систем обробки інформації і управляти їх розробкою та впровадженням. У процесі навчання за програмою магістрів студенти вивчають як предиктивні методології управління проектами PMBoK, PRINCE2, так і Agile-методології: Scrum, XP, Канбан і інші. Вони опановують аналіз і проектування інформаційних систем, управління програмами та портфелями, управління якістю, економіку управління проектами. Програма складена на основі вимог Міжнародної асоціації з управління проектами (IPMA), SWEBOK, ISO 21500. Ряд дисциплін викладається англійською мовою. Встановлено тісні зв’язки з спільнотою IT директорів України та окремими підприємствами. Навчання методам та засобам управління проектами поєднується з великим обсягом практичної роботи, спрямованої на управління проектами, програми та портфелями. Випускники мають можливість отримати міжнародний сертифікат IPMA.',
    [RU]: 'Программа предназначена для тех, кто хочет освоить технологии создания систем обработки информации и управлять их разработкой и внедрением. В процессе обучения по программе магистров студенты изучают как предиктивные методологии управления проектами PMBoK, PRINCE2, так и Agile-методологии: Scrum, XP, Канбан и другие. Они овладевают анализом и проектированием информационных систем, управлением программами и портфелями, управлением качеством, экономикой управления проектами. Программа составлена на основе требований Международной ассоциации по управлению проектами (IPMA), SWEBOK, ISO 21500. Ряд дисциплин преподается на английском языке. Установлены тесные связи с сообществом IT директоров Украины и отдельными предприятиями. Обучение методам и средствам управления проектами сочетается с большим объемом практической работы, направленной на управление проектами, программы и портфелями. Выпускники имеют возможность получить международный сертификат IPMA.',
    [ENG]: 'The program is intended for those who want to master the technologies of creating information processing systems and manage their development and implementation. In the process of studying under the Master’s program, students study both the predictive project management methodologies PMBoK, PRINCE2, and Agile-methodologies: Scrum, XP, Kanban and others. They master the analysis and design of information systems, program and portfolio management, quality management, and project management economics. The program is based on the requirements of the International Project Management Association (IPMA), SWEBOK, ISO 21500. A number of disciplines are taught in English. Close ties with the businessmen unions of Ukraine and the separate enterprises are established, including IT Directors Community of Ukraine, Nix Solutions, Epam, Sigma. Training in project management techniques and tools is combined with a large amount of practical work aimed at creating and implementing an enterprise development strategy, managing projects, programs, and portfolios. After successful completion of the program, graduates have the opportunity to obtain an international certificate of IPMA.',
};

const MASTERS_SPECIALITY_APPLY = {
    [UA]: 'Термін навчання на базі підготовки бакалавра: 1,5 року. Для вступу приймаються кандидати, які мають диплом бакалавра, спеціаліста або магістра за будь-якої спеціальності.',
    [RU]: 'Срок обучения на базе подготовки бакалавра: 1,5 года. Для поступления принимаются кандидаты, имеющие диплом бакалавра, специалиста или магистра по любой специальности.',
    [ENG]: 'Duration: 1,5 years on the basis of bachelor degree. Applicants with a bachelor’s, specialist or master’s degree in any specialty are accepted for admission',
};

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
`;

export const DataText = styled.div`
  	text-align: justify;
`;

export const Masters: React.FC = () => {
    const { language } = useLanguage();

    const props = {
        header: MASTERS_HEADER[language],
        renderElement: () => (
            <Content>
                <Text size='28px'>{MASTERS_SPECIALITY_HEADER[language]}</Text>
                <Text size='24px'>{MASTERS_SPECIALITY_SUBHEADER[language]}</Text>
                <br/>
                <DataText>
                    <p>{MASTERS_SPECIALITY_DESCRIPTION[language]}</p>
                    <br/>
                    <i>{MASTERS_SPECIALITY_APPLY[language]}</i>
                </DataText>
            </Content>
        ),
    };
    return <DefaultPage image={Image}>{props}</DefaultPage>;
};