const Mutation = {
  async createItem(parent, args, ctx, info) {
    console.log(args);
    const item = await ctx.prisma.createItem(
      {
        ...args
      },
      info
    );
    console.log(item);
    return item;
  }
};

module.exports = Mutation;
