export class ClimaHelpers {
  getIconNumber(numero: number): number {
    if (numero >= 200 && numero <= 232) {
      return 200;
    } else if (numero >= 300 && numero <= 321) {
      return 300;
    } else if (numero >= 500 && numero <= 531) {
      if (numero === 511) {
        return numero;
      }
      return 500;
    } else if (numero >= 600 && numero <= 622) {
      return 600;
    } else if (numero >= 701 && numero <= 781) {
      return 701;
    } else if (numero >= 801 && numero <= 804) {
      if (numero === 801) {
        return numero;
      } else if (numero === 802) {
        return numero;
      }
      return 803;
    }
    return 800;
  }

  formatData(): string {
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    const days = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];
    const data = new Date().toLocaleDateString();

    const formatData = data.replace(/(\d{2})(\/)(\d{2})/, '$3$2$1');

    const newData = new Date(formatData);

    return `${days[newData.getDay()]}, ${newData.getDate()} de ${
      meses[newData.getMonth()]
    }`;
  }
}
