 name: string
  order: number
  constructor(public dialogRef: MatDialogRef<ModalEditarFunilComponent>) { }

  ngOnInit(): void {
  }

   cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    const step = { name: this.name, order: this.order };
    this.dialogRef.close(step);
  }
