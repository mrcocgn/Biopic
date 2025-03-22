function Main() {
    return (
        <main>
            <section id="profil">
                <h2>Über mich</h2>
                <div class="profil-container">
                    <img src="avatar.jpg" alt="Profilbild von Marcos Ilgi" class="profilbild" />
                    <div class="profiltext">
                        <ul>
                            <li><strong>Name:</strong> Marcos Ilgi</li>
                            <li><strong>Position:</strong> Gründer & Entwickler von lni.design</li>
                            <li><strong>Standort:</strong> Köln, Deutschland</li>
                            <li><strong>Sprachen:</strong> Deutsch, Englisch, Türkisch, Spanisch (Grundkenntnisse)</li>
                            <li><strong>Technologien:</strong> HTML, CSS, JS, React, Node.js, PostgreSQL, Supabase, PHP, Python</li>
                            <li><strong>Fokus:</strong> Webentwicklung, Markenstrategie, Automatisierung, Business Design</li>
                            <li><strong>GitHub:</strong> <a href="https://github.com/mrcocgn" target="_blank">@mrcocgn</a></li>
                            <li><strong>Instagram:</strong> <a href="https://instagram.com/mrcocgn" target="_blank">@mrcocgn</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="inspiration">
                <h2>Inspiration</h2>
                <p>
                    Ich ziehe meine Inspiration aus der Verbindung von Technologie, Design und Strategie.<br />
                    Für mich geht es nicht nur um schöne Oberflächen – sondern um durchdachte Systeme, die Ergebnisse liefern.<br />
                    Kreativität ist für mich kein Selbstzweck, sondern ein Werkzeug zur Lösung.
                </p>
            </section>

            <section id="skills">
                <h2>Skills</h2>
                <ul>
                    <li><strong>Stack & Tools:</strong> HTML, CSS, JavaScript, React, Node.js, Express, Vite, PostgreSQL, Supabase, Firebase, Laravel, Django</li>
                    <li><strong>Weitere Skills:</strong> UI/UX, CI-Entwicklung, Content-Strategie, CMS-/CRM-Architektur, Automatisierung</li>
                    <li><strong>Sprachen:</strong> Deutsch, Englisch, Türkisch, Spanisch (Grundkenntnisse)</li>
                </ul>
            </section>

            <section id="projects">
                <h2>Projekte</h2>
                <ul>
                    <li><strong>lni.design:</strong> Internationale Kreativagentur mit Fokus auf Design, IT und Events. Tools: <em>lni.models</em>, <em>lni.booking</em></li>
                    <li><strong>CHENS29:</strong> T-Shirt-Verkaufsplattform – minimalistisch, effektiv, React + Stripe</li>
                    <li><strong>Sheherazade Dreams:</strong> Multilinguale Buchungsplattform für halal-konforme Kreuzfahrten</li>
                    <li><strong>To-Learn-List:</strong> KI-basierte Lernplattform mit graphbasiertem Wissenssystem</li>
                </ul>
            </section>

            <section id="philosophy">
                <h2>Lebensphilosophie</h2>
                <p>
                    Ich arbeite effizient, lösungsorientiert und mit klarer Linie.<br />
                    Kein Overengineering – sondern Systeme, die funktionieren.<br />
                    Ich sehe mich nicht als Dienstleister, sondern als strategischen Partner auf Augenhöhe.
                </p>
            </section>

            <section id="vision">
                <h2>Visionen & Ziele</h2>
                <p>
                    Ich entwickle skalierbare Systeme, die echten Mehrwert schaffen – nicht für Trends, sondern für langfristigen Nutzen.<br />
                    Technologie ist für mich Mittel zum Zweck. Der Zweck ist Wirkung.
                </p>
            </section>

            <section className="cta-section">
                <h2>Bereit für dein nächstes Projekt?</h2>
                <p>Lass uns gemeinsam etwas Großartiges starten.</p>
                <a href="mailto:mrcocgn@icloud.com" className="cta-button">Projekt anfragen</a>
            </section>

            <a href="https://github.com/mrcocgn" target="_blank" rel="noopener" className="cta-link">
                👉 Meine Projekte auf GitHub ansehen
            </a>

            

        </main>
    );
}

export default Main;