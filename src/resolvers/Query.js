const Query = {
  async items(parent, args, ctx, info) {
    const items = await ctx.prisma.items();
    return items;
  }
};

module.exports = Query;
