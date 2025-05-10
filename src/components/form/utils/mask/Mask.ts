class Mask {
  static number(value: string) {
    return value.replace(/\D/g, "");
  }

  static phone(value: string) {
    const onlyNumbers = this.number(value);
    if (onlyNumbers.length > 10) {
      return onlyNumbers.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    }
    return onlyNumbers.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  }
}

export default Mask;
