'use client';

import { Document, Page, Text, View, StyleSheet, PDFViewer, Font, Image } from '@react-pdf/renderer';

// Регистрируем шрифт для поддержки кириллицы
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf'
});

Font.register({
  family: 'Roboto-Bold',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf'
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Roboto',
  },
  header: {
    marginBottom: 20,
    borderBottom: '1 solid black',
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  date: {
    fontSize: 12,
    textAlign: 'right',
  },
  content: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: 20,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    objectFit: 'contain',
  },
  paragraph: {
    marginBottom: 15,
    fontSize: 12,
    lineHeight: 1.5,
    textAlign: 'center',
  },
  announcement: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Roboto-Bold',
  },
  link: {
    color: '#1a73e8',
    textDecoration: 'none',
  },
});

const NewspaperPDF = () => {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.title}>ОБЪЯВЛЕНИЕ</Text>
            <Text style={styles.date}>12 мая 2025 года</Text>
          </View>

          <View style={styles.content}>
            <View style={styles.imageContainer}>
              <Image
                src="/announcement.png"
                style={styles.image}
              />
            </View>

            <Text style={styles.announcement}>
              МЫ ЗАПУСТИЛИ САЙТ!
            </Text>

            <View style={styles.paragraph}>
              <Text>
                С 12.05.2025 года официальный сайт техникума переходит на портал ГосВеб.
              </Text>
            </View>

            <View style={styles.paragraph}>
              <Text>
                Адрес нового сайта: https://spet-lnr.gosuslugi.ru/
              </Text>
            </View>

            <View style={styles.paragraph}>
              <Text>
                Новый сайт находится в режиме переноса и дополнения информации с прежнего ресурса. 
                Информация постоянно корректируется и дополняется. Просим извинения за неточности.
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default NewspaperPDF; 