import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../components/Nav';

const info = () => {
  return (
    <div className="container">
      <Nav />
      <div className="info-container">
        <Image src="/affine-example.png" width={640} height={640} />
        <div className="parameters-box" style={{ height: '25%' }}>
          <p style={{ fontSize: '1.4rem', width: '90%' }}>
            Виконання різноманітних дій з геометричними об’єктами є центральною
            задачею в комп’ютерній графіці. Тому вибір математичних методів і
            алгоритмів для її реалізації суттєво впливає на ефективність цілої
            графічної системи. У сучасній комп’ютерній графіці досить широко
            використовується метод координат, оскільки графічне зображення
            складається з пікселів, які задаються координатами. Крім цього,
            координати використовуються для опису розміщення об’єктів та для
            створення зображень шляхом перетворень з однієї системи координат в
            іншу.
          </p>
          <div className="buttons">
            <Link href="/affine">
              <button className="btn">Почати</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default info;
