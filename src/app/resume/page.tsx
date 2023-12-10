import styles from './page.module.css';
import globals from '../globals.module.css';

export default function Resume() {
  const pdfUrl = './Robert-Vermeulen-Resume.pdf';

  return (
    <>
      <div className={styles.resume}>
        <div className={styles.resumeSections}>
          <h1 className={globals.pageTitle}>My Resume</h1>
          <div className={styles.pdfContainer}>
            <p>Turn this into my home page, and then current home page is about page</p>
          </div>
        </div>
      </div>
    </>
  )
}
