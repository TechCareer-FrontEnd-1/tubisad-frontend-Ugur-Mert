import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default function AboutMe() {
  return (
    <>
      <section className="mt-5">
        <Container>
          <h1 className="text-center pt-5">About Me</h1>
          <Row className="mb-5 ">
            <Col className="col-6 mt-5">image</Col>
            <Col className="col-6 mt-5">
              <p>
                Merhaba! Ben Uğur Mert Özder. Mekatronik mühendisiyim. Yaklaşık
                4 aydır kendimi geliştirmekteyim. Liseden beri farklı dillerde
                kodlama dersleri ile iç içe oldum. Bu durum bana yazılım
                alanında bir altyapı hazırladı. Öğrenme sürecine girdiğimde ise
                çok fazla yabancılık çekmeden adapte olabildim. Yaptığım
                çalışmalar, bireysel öğrenme sürecim ve TechCareer sayesinde
                farklı yetenekler edinme konusunda kendimi geliştirerek, iş
                hayatına hazırladım.
                <br />
                İstekli ve özenli yapılan, her detayı detaylı bir şekilde
                irdelenerek yapılan çalışmaların mutlaka başarı getireceği
                inancında ve bilincindeyim.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-dark text-white">
        <Container>
          <Row className=" pb-5">
            <Col className="col-6 mt-5">
              <h1>Neden yazılım sektörüne yöneldim ?</h1>
              <p>
                Mühendislikten ziyade yazılım alanında kendimi daha çok
                geliştirebileceğimi düşünüyorum. Bitirmiş olduğum bölümün bana
                katmış olduğu çok yönlü ve farklı sektörlerde iş imkanı
                nedeniyle yazılım üzerine yoğunlaşmak beni daha çok
                heyecanlandırdı.
              </p>
            </Col>
            <Col className="col-6 mt-5 ">image</Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
