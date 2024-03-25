import React from "react";

// normal bir class bir componen işlevlerini yerine getiremez
// bir classın component (bileşen) olmasını istiyorsak reactın içerisinde ki component clasını miras alırız

class Pagination extends React.Component {
  //kurucu method
  //bu bileşene gönderilen proplara erişebiliyoruz
  constructor(props) {
    super(props);

    // class component'larda state kullanımı
    this.state = {
      count: 0,
    };
  }

  //! class componentlarda yaşam döngüsü

  // 1) bileşenin ekrana basılma anını izleme
  componentDidMount() {
    
    // console.log("componentDidMount çalıştı");
  }

  // 2) bileşenin ekrandan gitme anını izleme
  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }

  // 3) bileşenin güncellenme anını izleme
  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }

  // render methodu ile ekrana basılacak olan arayüzü belirle
  render() {
    return (
      <div className="d-flex justify-content-center my-5 gap-3 text-dark">
        <button
          className="btn btn-primary"
          disabled={this.state.count === 0}
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          -
        </button>

        <h1>SAYFA {this.state.count}</h1>

        <button
          className="btn btn-danger"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}
export default Pagination;
