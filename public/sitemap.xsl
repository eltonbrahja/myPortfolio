<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | Elton Brahja</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #d1d1d1;
            background-color: #0d1117;
            margin: 0;
            padding: 40px;
            line-height: 1.6;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #161b22;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border: 1px solid #30363d;
          }
          h1 {
            color: #58a6ff;
            margin-top: 0;
            border-bottom: 1px solid #30363d;
            padding-bottom: 15px;
          }
          p {
            color: #8b949e;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th {
            text-align: left;
            padding: 12px;
            background: #21262d;
            color: #f0f6fc;
            border-bottom: 2px solid #30363d;
          }
          td {
            padding: 12px;
            border-bottom: 1px solid #30363d;
          }
          tr:hover {
            background-color: #1c2128;
          }
          a {
            color: #58a6ff;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority {
            font-weight: bold;
            color: #79c0ff;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Sitemap XML</h1>
          <p>Questa è una sitemap generata per i motori di ricerca (Google, Bing).</p>
          <table>
            <tr>
              <th>URL</th>
              <th>Priorità</th>
              <th>Frequenza</th>
              <th>Ultima Modifica</th>
            </tr>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <a href="{sitemap:loc}">
                    <xsl:value-of select="sitemap:loc"/>
                  </a>
                </td>
                <td>
                  <span class="priority"><xsl:value-of select="sitemap:priority"/></span>
                </td>
                <td>
                  <xsl:value-of select="sitemap:changefreq"/>
                </td>
                <td>
                  <xsl:value-of select="sitemap:lastmod"/>
                </td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
